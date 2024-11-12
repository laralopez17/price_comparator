package ar.edu.ubp.das.indecapi.utils;

import jakarta.xml.bind.*;
import jakarta.xml.soap.*;
import jakarta.xml.ws.Dispatch;
import jakarta.xml.ws.Service;
import jakarta.xml.ws.soap.SOAPFaultException;

import javax.xml.namespace.QName;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.net.URL;
import java.util.*;

public class SOAPClient {

    private String wsdlUrl;
    private String namespace;
    private String serviceName;
    private String portName;
    private String operationName;
    private String soapAction;
    private String username;
    private String password;
    private String apiKey;

    private static final Set<Class<?>> SIMPLE_TYPES = new HashSet<>(Arrays.asList(
            String.class, Boolean.class, Character.class, Byte.class, Short.class, Integer.class, Long.class,
            Float.class, Double.class, BigDecimal.class, BigInteger.class
    ));

    private SOAPClient(SOAPClientBuilder builder) {
        this.wsdlUrl = builder.wsdlUrl;
        this.namespace = builder.namespace;
        this.serviceName = builder.serviceName;
        this.portName = builder.portName;
        this.operationName = builder.operationName;
        this.soapAction = builder.soapAction;
        this.username = builder.username;
        this.password = builder.password;
        this.apiKey = builder.apiKey;
    }

    public <T> T callServiceForObject(Class<T> clazz, String responseElementName, Map<String, Object> parameters) {
        try {
            SOAPMessage soapRequest = createRequest(parameters);
            soapRequest.writeTo(System.out); // Para depuración

            SOAPMessage soapResponse = sendRequest(soapRequest);
            soapResponse.writeTo(System.out); // Para depuración

            return processResponseForObject(soapResponse, clazz, responseElementName);
        }
        catch (SOAPFaultException e) {
            SOAPFault fault = e.getFault();
            throw new RuntimeException(fault.getFaultCode() + "- " + fault.getFaultString());
        }
        catch (MarshalException | UnmarshalException e) {
            Throwable linkedException = e.getLinkedException();
            if (linkedException != null) {
                throw new RuntimeException(linkedException.getMessage(), e);
            }
            else {
                throw new RuntimeException(e.getMessage(), e);
            }
        }
        catch (Exception e) {
            throw new RuntimeException(e.getMessage(), e);
        }
    }

    public <T> T callServiceForObject(Class<T> clazz, String responseElementName) {
        return callServiceForObject(clazz, responseElementName, null);
    }

    public <T> List<T> callServiceForList(Class<T> clazz, String responseElementName, Map<String, Object> parameters) {
        try {
            SOAPMessage soapRequest = createRequest(parameters);
            soapRequest.writeTo(System.out); // Para depuración

            SOAPMessage soapResponse = sendRequest(soapRequest);
            soapResponse.writeTo(System.out); // Para depuración

            return processResponseForList(soapResponse, clazz, responseElementName);
        }
        catch (SOAPFaultException e) {
            SOAPFault fault = e.getFault();
            throw new RuntimeException(fault.getFaultCode() + "- " + fault.getFaultString());
        }
        catch (MarshalException | UnmarshalException e) {
            Throwable linkedException = e.getLinkedException();
            if (linkedException != null) {
                throw new RuntimeException(linkedException.getMessage(), e);
            }
            else {
                throw new RuntimeException(e.getMessage(), e);
            }
        }
        catch (Exception e) {
            throw new RuntimeException(e.getMessage(), e);
        }
    }

    public <T> List<T> callServiceForList(Class<T> clazz, String responseElementName) {
        return callServiceForList(clazz, responseElementName, null);
    }

    private SOAPMessage createRequest(Map<String, Object> parameters) throws Exception {
        MessageFactory messageFactory = MessageFactory.newInstance();
        SOAPMessage soapMessage = messageFactory.createMessage();
        SOAPPart soapPart = soapMessage.getSOAPPart();
        SOAPEnvelope envelope = soapPart.getEnvelope();
        SOAPBody body = envelope.getBody();

        SOAPElement operation = body.addChildElement(operationName, "tns", namespace);

        if (parameters != null) {
            for (Map.Entry<String, Object> entry : parameters.entrySet()) {
                addObjectToOperation(operation, entry.getKey(), entry.getValue());
            }
        }

        addWSSecurityHeader(soapMessage);

        soapMessage.saveChanges();
        return soapMessage;
    }

    private void addObjectToOperation(SOAPElement operation, String parameterName, Object parameter) throws Exception {
        if (isSimpleType(parameter.getClass())) {
            operation.addChildElement(parameterName).addTextNode(parameter.toString());
        }
        else {
            JAXBContext jaxbContext = JAXBContext.newInstance(parameter.getClass()); //Serialización
            Marshaller marshaller = jaxbContext.createMarshaller();
            marshaller.marshal(parameter, operation);
        }
    }

    private boolean isSimpleType(Class<?> clazz) {
        return clazz.isPrimitive() || SIMPLE_TYPES.contains(clazz);
    }

    private void addWSSecurityHeader(SOAPMessage soapMessage) throws SOAPException {
        SOAPPart soapPart = soapMessage.getSOAPPart();
        SOAPEnvelope envelope = soapPart.getEnvelope();

        SOAPHeader header = envelope.getHeader();
        if (header == null) {
            header = envelope.addHeader();
        }

        String wssePrefix = "wsse";
        String wsseNamespaceURI = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd";
        SOAPElement securityElem = header.addChildElement("Security", wssePrefix, wsseNamespaceURI);

        /*
        if (username != null) {
            SOAPElement usernameTokenElem = securityElem.addChildElement("UsernameToken", wssePrefix);
            SOAPElement usernameElem = usernameTokenElem.addChildElement("Username", wssePrefix);
            usernameElem.addTextNode(username);
        }

        if (password != null) {
            SOAPElement passwordElem = usernameTokenElem.addChildElement("Password", wssePrefix);
            passwordElem.setAttribute("Type", "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText");
            passwordElem.addTextNode(password);
        }*/
    }

    private SOAPMessage sendRequest(SOAPMessage soapRequest) throws Exception {
        URL url = new URL(wsdlUrl);
        QName qname = new QName(namespace, serviceName);
        Service service = Service.create(url, qname);

        QName portQName = new QName(namespace, portName);
        Dispatch<SOAPMessage> dispatch = service.createDispatch(portQName, SOAPMessage.class, Service.Mode.MESSAGE);

        if (this.apiKey != null && !this.apiKey.isEmpty()) {
            dispatch.getRequestContext().put("X-API-KEY", this.apiKey);
        }

        if (soapAction != null && !soapAction.isEmpty()) {
            dispatch.getRequestContext().put(Dispatch.SOAPACTION_USE_PROPERTY, true);
            dispatch.getRequestContext().put(Dispatch.SOAPACTION_URI_PROPERTY, soapAction);
        }

        return dispatch.invoke(soapRequest);
    }

    private <T> T processResponseForObject(SOAPMessage soapResponse, Class<T> clazz, String responseElementName) throws Exception {
        List<T> objectList = new LinkedList<>();
        processResponse(soapResponse, clazz, responseElementName, objectList);
        return objectList.isEmpty() ? null : objectList.get(0);
    }

    private <T> List<T> processResponseForList(SOAPMessage soapResponse, Class<T> clazz, String responseElementName) throws Exception {
        List<T> objectList = new LinkedList<>();
        processResponse(soapResponse, clazz, responseElementName, objectList);
        return objectList;
    }

    private <T> void processResponse(SOAPMessage soapResponse, Class<T> clazz, String responseElementName, List<T> objectList) throws Exception {
        SOAPBody body = soapResponse.getSOAPBody();

        if (body.hasFault()) {
            SOAPFault fault = body.getFault();
            throw new RuntimeException(fault.getFaultCode() + ". " + fault.getFaultString());
        }

        JAXBContext jaxbContext = JAXBContext.newInstance(clazz);
        Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();

        Iterator<Node> iterator = body.getChildElements();
        while (iterator.hasNext()) {
            Node node = iterator.next();
            if (node instanceof SOAPElement) {
                SOAPElement element = (SOAPElement) node;
                if (element.getLocalName().equals(responseElementName)) {
                    Iterator<?> childIterator = element.getChildElements();
                    while (childIterator.hasNext()) {
                        Node childNode = (Node) childIterator.next();
                        if (childNode instanceof SOAPElement) {
                            SOAPElement childElement = (SOAPElement) childNode;
                            T object = (T) unmarshaller.unmarshal(childElement);
                            objectList.add(object);
                        }
                    }
                }
            }
        }
    }

    public static class SOAPClientBuilder {

        private String wsdlUrl;
        private String namespace;
        private String serviceName;
        private String portName;
        private String operationName;
        private String soapAction;
        private String username;
        private String password;
        private String apiKey;

        public SOAPClientBuilder wsdlUrl(String wsdlUrl) {
            this.wsdlUrl = wsdlUrl;
            return this;
        }

        public SOAPClientBuilder namespace(String namespace) {
            this.namespace = namespace;
            return this;
        }

        public SOAPClientBuilder serviceName(String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        public SOAPClientBuilder portName(String portName) {
            this.portName = portName;
            return this;
        }

        public SOAPClientBuilder operationName(String operationName) {
            this.operationName = operationName;
            return this;
        }

        public SOAPClientBuilder soapAction(String soapAction) {
            this.soapAction = soapAction;
            return this;
        }

        public SOAPClientBuilder username(String username) {
            this.username = username;
            return this;
        }

        public SOAPClientBuilder password(String password) {
            this.password = password;
            return this;
        }

        public SOAPClientBuilder apiKey(String apiKey) {
            this.apiKey = apiKey;
            return this;
        }

        public SOAPClient build() {
            return new SOAPClient(this);
        }
    }

}
