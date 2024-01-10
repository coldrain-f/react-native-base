package whale.dashboard.exception;

public class KanjiNotFoundException extends EntityNotFoundException {
    public KanjiNotFoundException(Long id) {
        super("Kanji", id);
    }
}
