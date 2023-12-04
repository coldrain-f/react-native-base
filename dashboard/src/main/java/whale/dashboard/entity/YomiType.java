package whale.dashboard.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class YomiType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "YOMI_TYPE_ID")
    private Long id;

    private String name;

    @Builder
    public YomiType(final String name) {
        this.name = name;
    }

    public void change(final String name) {
        this.name = name;
    }
}
