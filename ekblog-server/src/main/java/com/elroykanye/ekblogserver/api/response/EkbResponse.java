package com.elroykanye.ekblogserver.api.response;

import java.io.Serializable;

public record EkbResponse(Long id, String message) implements Serializable {
}
