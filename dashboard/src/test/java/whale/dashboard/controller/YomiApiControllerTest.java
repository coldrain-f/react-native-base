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
import whale.dashboard.dto.YomiDto;

import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class YomiApiControllerTest extends BaseControllerTest {

  @Test
  @DisplayName("Yomi 등록")
  void registerYomi() throws Exception {
      Long kanjiId = 1L;
      YomiDto.RegistrationRequest request1 = new YomiDto.RegistrationRequest("Test name", 1L);
      YomiDto.RegistrationRequest request2 = new YomiDto.RegistrationRequest("Test name2", 2L);

      ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.post("/api/kanjis/{id}/yomi", kanjiId)
              .contentType(MediaType.APPLICATION_JSON)
              .content(objectMapper.writeValueAsString(List.of(request1, request2))));

      resultActions.andExpect(status().isOk());
  }

    @Test
    @DisplayName("Yomi 수정")
    void modifyYomi() throws Exception {
        YomiDto.ModifyRequest request1 = new YomiDto.ModifyRequest(1L, "Modified name");
        YomiDto.ModifyRequest request2 = new YomiDto.ModifyRequest(2L, "Modified name2");

        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.patch("/api/yomi")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(List.of(request1, request2))));

        resultActions.andExpect(status().isOk());
    }

    @Test
    @DisplayName("Yomi 삭제")
    void removeYomi() throws Exception {
        DeleteIdListRequest request = new DeleteIdListRequest(Arrays.asList(1L, 2L));

        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.delete("/api/yomi")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)));

        resultActions.andExpect(status().isOk());
    }

    @Test
    @DisplayName("Yomi 조회")
    void findAllYomi() throws Exception {
        Long kanjiId = 1L;
        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.get("/api/kanjis/{id}/yomi", kanjiId)
                .contentType(MediaType.APPLICATION_JSON));

        resultActions.andExpect(status().isOk());
    }
}
