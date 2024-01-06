package whale.dashboard.dto;

import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@NoArgsConstructor
public class DeleteIdListRequest {

    @NotNull(message = "삭제할 ID를 입력해주세요.")
    @Size(min = 1, message = "하나 이상의 ID를 입력해주세요.")
    private List<Long> idList;

    public DeleteIdListRequest(List<Long> idList) {
        this.idList = idList;
    }

    public List<Long> getIdList() {
        return idList;
    }
}
