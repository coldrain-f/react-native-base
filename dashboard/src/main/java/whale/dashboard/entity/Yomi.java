package whale.dashboard.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Yomi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "YOMI_ID")
    private Long id;

    @Column
    private String name;

    @ManyToOne
    @JoinColumn(name = "KANJI_ID")
    private Kanji kanji;

    @ManyToOne
    @JoinColumn(name = "YOMI_TYPE_ID")
    private YomiType yomiType;

    @Builder
    public Yomi(final String name, final Kanji kanji, final YomiType yomiType) {
        this.name = name;
        this.kanji = kanji;
        this.yomiType = yomiType;
    }

    public void change(final String name) {
        this.name = name;
    }

    public void kanjiSetNull() {
        this.kanji = null;
    }
}
