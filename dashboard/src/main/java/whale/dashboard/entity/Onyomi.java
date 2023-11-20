package whale.dashboard.entity;

import lombok.AccessLevel;
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
}
