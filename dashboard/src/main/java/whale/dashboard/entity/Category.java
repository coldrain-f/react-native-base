package whale.dashboard.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"VOCABULARY_ID", "SUBJECT"}))
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CATEGORY_ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "VOCABULARY_ID")
    private Vocabulary vocabulary;

    @Column(nullable = false)
    private String subject;

    private String description;

    @Builder
    public Category(final Vocabulary vocabulary, final String subject, final String description) {
        this.vocabulary = vocabulary;
        this.subject = subject;
        this.description = description;
    }

    public void change(final String subject, final String description) {
        this.subject = subject;
        this.description = description;
    }

    public void vocabularySetNull() {
        this.vocabulary = null;
    }
}
