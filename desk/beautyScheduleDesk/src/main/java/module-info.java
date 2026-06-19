module com.senac.beautyscheduledesk {
    requires javafx.controls;
    requires javafx.fxml;
    requires java.desktop;
    requires com.google.gson;


    opens com.senac.beautyscheduledesk to javafx.fxml;
    opens com.senac.beautyscheduledesk.dto to com.google.gson;

    exports com.senac.beautyscheduledesk;
}