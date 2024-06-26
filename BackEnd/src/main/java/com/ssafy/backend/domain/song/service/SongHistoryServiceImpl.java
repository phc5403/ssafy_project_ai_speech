package com.ssafy.backend.domain.song.service;

import com.ssafy.backend.domain.member.entity.Member;
import com.ssafy.backend.domain.member.exception.MemberError;
import com.ssafy.backend.domain.member.exception.MemberException;
import com.ssafy.backend.domain.member.repository.MemberRepository;
import com.ssafy.backend.domain.song.entity.Song;
import com.ssafy.backend.domain.song.entity.SongHistory;
import com.ssafy.backend.domain.song.repository.SongHistoryRepository;
import com.ssafy.backend.domain.song.repository.SongRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Transactional
@Service
public class SongHistoryServiceImpl implements SongHistoryService{

    private final SongHistoryRepository songHistoryRepository;
    private final MemberRepository memberRepository;
    private final SongRepository songRepository;


    // 부른 노래 기록 생성
    @Override
    public void createSongHistory(Long songId, Long memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(()
                -> new MemberException(MemberError.NOT_FOUND_MEMBER));
        Song song = songRepository.findById(songId)
                .orElseThrow(() -> new IllegalArgumentException("해당 노래를 찾을 수 없다 ! : " + songId));

        SongHistory songHistory = SongHistory.builder()
                .song(song)
                .member(member)
                .build();
        songHistoryRepository.save(songHistory);
    }
}
