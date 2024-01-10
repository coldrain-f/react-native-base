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
import whale.dashboard.dto.FuriganaDto;

import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class FuriganaApiControllerTest extends BaseControllerTest {

  @Test
  @DisplayName("후리가나 등록")
  void registerFurigana() throws Exception {
      Long wordId = 1L;
      FuriganaDto.RegistrationRequest request1 = new FuriganaDto.RegistrationRequest("Test token", "Test reading1");
      FuriganaDto.RegistrationRequest request2 = new FuriganaDto.RegistrationRequest("Test token2", "Test reading2");

      ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.post("/api/words/{id}/furigana", wordId)
              .contentType(MediaType.APPLICATION_JSON)
              .content(objectMapper.writeValueAsString(List.of(request1, request2))));

      resultActions.andExpect(status().isOk());
  }

    @Test
    @DisplayName("후리가나 수정")
    void modifyFurigana() throws Exception {
        FuriganaDto.ModifyRequest request1 = new FuriganaDto.ModifyRequest(1L, "Modified token", "Modified reading");
        FuriganaDto.ModifyRequest request2 = new FuriganaDto.ModifyRequest(2L, "Modified token2","Modified reading2");

        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.patch("/api/furigana")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(List.of(request1, request2))));

        resultActions.andExpect(status().isOk());
    }

    @Test
    @DisplayName("후리가나 삭제")
    void removeFurigana() throws Exception {
        DeleteIdListRequest request = new DeleteIdListRequest(Arrays.asList(1L, 2L));

        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.delete("/api/furigana")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)));

        resultActions.andExpect(status().isOk());
    }

    @Test
    @DisplayName("후리가나 조회")
    void findAllFurigana() throws Exception {
        Long wordId = 1L;
        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.get("/api/words/{id}/furigana", wordId)
                .contentType(MediaType.APPLICATION_JSON));

        resultActions.andExpect(status().isOk());
    }
}
