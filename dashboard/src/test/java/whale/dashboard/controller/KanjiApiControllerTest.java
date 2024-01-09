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
import whale.dashboard.dto.KanjiDto;

import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class KanjiApiControllerTest extends BaseControllerTest {

  @Test
  @DisplayName("한자 등록")
  void registerKanjis() throws Exception {
      Long categoryId = 1L;
      KanjiDto.RegistrationRequest request1 = new KanjiDto.RegistrationRequest("Test name", "Test sound", "Test meaning", "test strokeCount");
      KanjiDto.RegistrationRequest request2 = new KanjiDto.RegistrationRequest("Test name2", "Test sound2", "Test meaning2", "test strokeCount2");

      ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.post("/api/categories/{id}/kanjis", categoryId)
              .contentType(MediaType.APPLICATION_JSON)
              .content(objectMapper.writeValueAsString(List.of(request1, request2))));

      resultActions.andExpect(status().isOk());
  }

    @Test
    @DisplayName("한자 수정")
    void modifyKanjis() throws Exception {
        KanjiDto.ModifyRequest request1 = new KanjiDto.ModifyRequest(1L, "Modified name", "Modified sound", "Modified meaning", "Modified strokeCount", 1L);
        KanjiDto.ModifyRequest request2 = new KanjiDto.ModifyRequest(2L, "Modified name2", "Modified sound2", "Modified meaning2", "Modified strokeCount2", 2L);

        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.patch("/api/kanjis")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(List.of(request1, request2))));

        resultActions.andExpect(status().isOk());
    }

    @Test
    @DisplayName("한자 삭제")
    void removeKanjis() throws Exception {
        DeleteIdListRequest request = new DeleteIdListRequest(Arrays.asList(1L, 2L));

        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.delete("/api/kanjis")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)));

        resultActions.andExpect(status().isOk());
    }

    @Test
    @DisplayName("한자 조회")
    void findAllKanjis() throws Exception {
        Long categoryId = 1L;
        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.get("/api/categories/{id}/kanjis", categoryId)
                .contentType(MediaType.APPLICATION_JSON));

        resultActions.andExpect(status().isOk());
    }
}
