package whale.dashboard.controller;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import whale.dashboard.BaseControllerTest;
import whale.dashboard.dto.DeleteIdListRequest;
import whale.dashboard.dto.YomiTypeDto;

import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class YomiTypeApiControllerTest extends BaseControllerTest {

    @Test
    @DisplayName("YomiType 등록")
    void registerYomiType() throws Exception {
        YomiTypeDto.RegistrationRequest request1 = new YomiTypeDto.RegistrationRequest("Test name");
        YomiTypeDto.RegistrationRequest request2 = new YomiTypeDto.RegistrationRequest("Test name2");

        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.post("/api/yomi-types")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(List.of(request1, request2))));

        resultActions.andExpect(status().isOk());
    }

    @Test
    @DisplayName("YomiType 수정")
    void modifyYomiType() throws Exception {
        YomiTypeDto.ModifyRequest request1 = new YomiTypeDto.ModifyRequest(1L, "Modified name");
        YomiTypeDto.ModifyRequest request2 = new YomiTypeDto.ModifyRequest(2L, "Modified name2");

        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.patch("/api/yomi-types")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(List.of(request1, request2))));

        resultActions.andExpect(status().isOk());
    }

    @Test
    @DisplayName("YomiType 삭제")
    void removeYomiType() throws Exception {
        DeleteIdListRequest request = new DeleteIdListRequest(Arrays.asList(1L, 2L));

        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.delete("/api/yomi-types")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)));

        resultActions.andExpect(status().isOk());
    }

    @Test
    @DisplayName("YomiType 조회")
    void findAllYomiType() throws Exception {
        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.get("/api/yomi-types")
                .contentType(MediaType.APPLICATION_JSON));

        resultActions.andExpect(status().isOk());
    }
}
