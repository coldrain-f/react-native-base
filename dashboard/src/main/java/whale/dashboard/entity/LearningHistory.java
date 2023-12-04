package whale.dashboard.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access =  AccessLevel.PROTECTED)
public class LearningHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "LEARNING_HISTORY_ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "KANJI_ID")
    private Kanji kanji;

    private LocalDateTime learningDate;
}
