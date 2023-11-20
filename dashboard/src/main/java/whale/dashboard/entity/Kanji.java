package whale.dashboard.entity;

import lombok.AccessLevel;
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

    private String name;

    private String meaning;

    private Integer strokeCount;

    private Integer readCount;
}
