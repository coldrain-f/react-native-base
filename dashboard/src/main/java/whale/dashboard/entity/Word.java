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
    @JoinColumn(name = "YOMI_ID")
    private Yomi yomi;

    @Builder
    public Word(final Yomi yomi, final String name, final String meaning) {
        this.yomi = yomi;
        this.name = name;
        this.meaning = meaning;
    }

    public void change(final Yomi yomi, final String name, final String meaning) {
        this.yomi = yomi;
        this.name = name;
        this.meaning = meaning;
    }
}
