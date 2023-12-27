package whale.dashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import whale.dashboard.entity.Category;
import whale.dashboard.entity.Kanji;

import java.util.List;

public interface KanjiRepository extends JpaRepository<Kanji, Long> {

    List<Kanji> findAllByCategory(Category category);
}
