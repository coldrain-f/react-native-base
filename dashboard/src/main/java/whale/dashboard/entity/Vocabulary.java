package whale.dashboard.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"VOCABULARY_TYPE_ID", "TITLE"}))
public class Vocabulary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "VOCABULARY_ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "VOCABULARY_TYPE_ID")
    private VocabularyType vocabularyType;

    @Column(nullable = false)
    private String title;

    private String description;

    @Builder
    public Vocabulary(final VocabularyType vocabularyType, final String title, final String description) {
        this.vocabularyType = vocabularyType;
        this.title = title;
        this.description = description;
    }

    public void change(final VocabularyType vocabularyType, final String title, final String description) {
        this.vocabularyType = vocabularyType;
        this.title = title;
        this.description = description;
    }
}
