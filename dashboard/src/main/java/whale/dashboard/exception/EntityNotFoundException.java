package whale.dashboard.exception;

public class EntityNotFoundException extends RuntimeException{
    public EntityNotFoundException(String entityType, Long id) {
        super(entityType + " Not Found with id : " + id);
    }
}
