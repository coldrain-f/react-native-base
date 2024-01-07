package whale.dashboard.exception;

public class VocabularyNotFoundException extends EntityNotFoundException {
    public VocabularyNotFoundException(Long id) {
        super("Vocabulary", id);
    }
}
