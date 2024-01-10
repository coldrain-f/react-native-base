
package whale.dashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import whale.dashboard.entity.YomiType;

public interface YomiTypeRepository extends JpaRepository<YomiType, Long> {
}
