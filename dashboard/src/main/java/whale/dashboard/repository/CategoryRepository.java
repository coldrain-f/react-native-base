package whale.dashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import whale.dashboard.entity.Category;
import whale.dashboard.entity.Vocabulary;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    List<Category> findAllByVocabulary(Vocabulary vocabulary);

}
