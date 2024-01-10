package whale.dashboard.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import whale.dashboard.entity.Word;
import whale.dashboard.entity.Yomi;

import java.util.List;

public interface WordRepository extends JpaRepository<Word, Long> {

    List<Word> findAllByYomi(Yomi yomi);

    Page<Word> findByYomiId(Long yomiId, Pageable pageable);
}
