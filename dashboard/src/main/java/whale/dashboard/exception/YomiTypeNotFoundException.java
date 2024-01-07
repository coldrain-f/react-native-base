package whale.dashboard.exception;

public class YomiTypeNotFoundException extends EntityNotFoundException {
    public YomiTypeNotFoundException(Long id) {
        super("YomiType", id);
    }
}
