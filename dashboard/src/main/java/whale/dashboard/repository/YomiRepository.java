package whale.dashboard.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import whale.dashboard.entity.Category;
import whale.dashboard.entity.Kanji;
import whale.dashboard.entity.Yomi;

import java.util.List;

public interface YomiRepository extends JpaRepository<Yomi, Long> {

    List<Yomi> findAllByKanji(Kanji kanji);

    Page<Yomi> findByKanjiId(Long kanjiId, Pageable pageable);
}
