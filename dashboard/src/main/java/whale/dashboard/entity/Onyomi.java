package whale.dashboard.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Onyomi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ONYOMI_ID")
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name = "KANJI_ID")
    private Kanji kanji;

    @Builder
    public Onyomi(final Kanji kanji, final String name) {
        this.kanji = kanji;
        this.name = name;
    }

    public void change(final Kanji kanji, final String name) {
        this.kanji = kanji;
        this.name = name;
    }
}
