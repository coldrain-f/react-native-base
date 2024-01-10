package whale.dashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import whale.dashboard.entity.Vocabulary;

public interface VocabularyRepository extends JpaRepository<Vocabulary, Long> {
}
