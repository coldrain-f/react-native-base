package whale.dashboard.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Furigana {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "FURIGANA_ID")
    private Long id;

    private String token;

    private String reading;

    @ManyToOne
    @JoinColumn(name = "WORD_ID")
    private Word word;

    @Builder
    public Furigana(final Word word, final String token, final String reading) {
        this.word = word;
        this.token = token;
        this.reading = reading;
    }

    public void change(final String token, final String reading) {
        this.token = token;
        this.reading = reading;
    }

    public void wordSetNull() {
        this.word = null;
    }
}
