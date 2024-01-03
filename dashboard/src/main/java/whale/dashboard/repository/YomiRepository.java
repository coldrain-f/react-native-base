package whale.dashboard.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import whale.dashboard.entity.Kanji;
import whale.dashboard.entity.Yomi;
import whale.dashboard.entity.YomiType;

import java.util.List;

public interface YomiRepository extends JpaRepository<Yomi, Long> {

    List<Yomi> findAllByKanji(Kanji kanji);

    List<Yomi> findAllByYomiType(YomiType yomiType);

    Page<Yomi> findByKanjiId(Long kanjiId, Pageable pageable);
}
