package whale.dashboard.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Kanji {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "KANJI_ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "CATEGORY_ID")
    private Category category;

    private String name;

    private String sound;

    private String meaning;

    private String strokeCount;

    @Builder
    public Kanji(final Category category, final String name, final String sound, final String meaning,
                 final String strokeCount) {
        this.category = category;
        this.name = name;
        this.sound = sound;
        this.meaning = meaning;
        this.strokeCount = strokeCount;
    }

    public void change(final Category category, final String name, final String sound, final String meaning,
                       final String strokeCount) {
        this.category = category;
        this.name = name;
        this.sound = sound;
        this.meaning = meaning;
        this.strokeCount = strokeCount;
    }
}
