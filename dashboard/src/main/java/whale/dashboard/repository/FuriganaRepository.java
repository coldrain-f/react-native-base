package whale.dashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import whale.dashboard.entity.Furigana;
import whale.dashboard.entity.Word;

import java.util.List;

public interface FuriganaRepository extends JpaRepository<Furigana, Long> {

    List<Furigana> findAllByWord(Word word);
}
