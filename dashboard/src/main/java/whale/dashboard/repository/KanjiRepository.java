package whale.dashboard.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import whale.dashboard.entity.Category;
import whale.dashboard.entity.Kanji;

import java.util.List;

public interface KanjiRepository extends JpaRepository<Kanji, Long> {

    List<Kanji> findAllByCategory(Category category);

    Page<Kanji> findByCategoryId(Long categoryId, Pageable pageable);
}
