package com.ssafy.CommonPJT.service;

import com.ssafy.CommonPJT.domain.MoviePlayingInfo;
import com.ssafy.CommonPJT.domain.Ticket;
import com.ssafy.CommonPJT.dto.Ticket.TicketSaveDto;
import com.ssafy.CommonPJT.dto.Ticket.TicketResDto;
import com.ssafy.CommonPJT.repository.MoviePlayingInfoRepository;
import com.ssafy.CommonPJT.repository.TicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository ticketRepository;
    private final MoviePlayingInfoRepository moviePlayingInfoRepository;
    // 티켓 추가
    @Transactional
    public void save(TicketSaveDto requestDto) {
        Long moviePlayingInfoId = requestDto.getMoviePlayingInfoId();
        MoviePlayingInfo info = moviePlayingInfoRepository.findById(moviePlayingInfoId)
                .orElseThrow(() -> new NoSuchElementException("존재하지 않는 값입니다."));
        List<Ticket> tickets = ticketRepository.findAll();
        Ticket saveTicket = requestDto.toEntity(info);
        for (Ticket ticket : tickets) {
            if (ticket.getSeat().equals(saveTicket.getSeat())) {
                throw new IllegalArgumentException("이미 예약된 좌석입니다.");
            }
        }
        ticketRepository.save(saveTicket);
    }

    // 티켓 리스트 조회
    public List<TicketResDto> findTickets() {
        List<Ticket> tickets = ticketRepository.findAll();
        return tickets.stream().map(TicketResDto::new).collect(Collectors.toList());
    }

    // 특정 티켓 조회
    public List<TicketResDto> findByNum(String phoneNumber) {
        List<Ticket> tickets = ticketRepository.findAll();
        List<Ticket> ticketsByNum = new ArrayList<>();
        for (Ticket ticket : tickets) {
            if (ticket.getPhoneNumber().equals(phoneNumber)) {
                ticketsByNum.add(ticket);
            }
        }
        return ticketsByNum.stream().map(TicketResDto::new).collect(Collectors.toList());
    }

    @Transactional
    public void delete(Long id) {
        Ticket target = ticketRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("잘못된 티켓번호입니다."));
        ticketRepository.delete(target);
    }
}