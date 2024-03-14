package com.ssafy.backend.domain.recording_movie.repository;

import com.ssafy.backend.domain.recording_movie.entity.Reels;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReelsRepository extends JpaRepository<Reels, Long> {
}