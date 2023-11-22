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

    //Todo 일부 칼럼들 칼럼명 변경 예정

    private String name;

    private String meaning;

    private Integer strokeCount;

    private Integer readCount;

    @Builder
    public Kanji(final Category category, final String name, final String meaning, final Integer strokeCount,
                 final Integer readCount) {
        this.category = category;
        this.name = name;
        this.meaning = meaning;
        this.strokeCount = strokeCount;
        this.readCount = readCount;
    }

    public void change(final Category category, final String name, final String meaning, final Integer strokeCount,
                       final Integer readCount) {
        this.category = category;
        this.name = name;
        this.meaning = meaning;
        this.strokeCount = strokeCount;
        this.readCount = readCount;
    }
}
