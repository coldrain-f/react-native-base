package whale.dashboard.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Kunyomi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "KUNYOMI_ID")
    private Long id;

    private String name;
}
