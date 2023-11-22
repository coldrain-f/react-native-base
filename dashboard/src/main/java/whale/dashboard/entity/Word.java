package whale.dashboard.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Word {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "WORD_ID")
    private Long id;

    private String name;

    private String meaning;

    @ManyToOne
    @JoinColumn(name = "ONYOMI_ID")
    private Onyomi onyomi;

    @ManyToOne
    @JoinColumn(name = "KUNYOMI_ID")
    private Kunyomi kunyomi;

    @Builder
    public Word(final Onyomi onyomi, final Kunyomi kunyomi, final String name, final String meaning) {
        this.onyomi = onyomi;
        this.kunyomi = kunyomi;
        this.name = name;
        this.meaning = meaning;
    }
}
