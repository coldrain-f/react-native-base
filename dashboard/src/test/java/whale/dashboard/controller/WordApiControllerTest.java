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
import whale.dashboard.dto.WordDto;
import whale.dashboard.dto.YomiDto;

import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class WordApiControllerTest extends BaseControllerTest {

  @Test
  @DisplayName("단어 등록")
  void registerWords() throws Exception {
      Long yomiId = 1L;
      WordDto.RegistrationRequest request1 = new WordDto.RegistrationRequest("Test name", "Test meaning");
      WordDto.RegistrationRequest request2 = new WordDto.RegistrationRequest("Test name2", "Test meaning2");

      ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.post("/api/yomi/{id}/words", yomiId)
              .contentType(MediaType.APPLICATION_JSON)
              .content(objectMapper.writeValueAsString(List.of(request1, request2))));

      resultActions.andExpect(status().isOk());
  }

    @Test
    @DisplayName("단어 수정")
    void modifyWords() throws Exception {
        WordDto.ModifyRequest request1 = new WordDto.ModifyRequest(1L, "Modified name", "Modified meaning", 1L);
        WordDto.ModifyRequest request2 = new WordDto.ModifyRequest(2L, "Modified name2","Modified meaning2", 2L);

        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.patch("/api/words")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(List.of(request1, request2))));

        resultActions.andExpect(status().isOk());
    }

    @Test
    @DisplayName("단어 삭제")
    void removeWords() throws Exception {
        DeleteIdListRequest request = new DeleteIdListRequest(Arrays.asList(1L, 2L));

        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.delete("/api/words")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)));

        resultActions.andExpect(status().isOk());
    }

    @Test
    @DisplayName("단어 조회")
    void findAllWords() throws Exception {
        Long yomiId = 1L;
        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.get("/api/yomi/{id}/words", yomiId)
                .contentType(MediaType.APPLICATION_JSON));

        resultActions.andExpect(status().isOk());
    }
}
