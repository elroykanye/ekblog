package com.elroykanye.ekblogserver.business.util;

import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.Instant;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

@Slf4j
public class ImageUtil {
    private static final String imageDir = "db/images";

    public static String saveImage(MultipartFile imageFile) throws IOException {
        File imageFilesDir = new File(imageDir);
        boolean folderExists = imageFilesDir.exists();
        if (!folderExists) {
            folderExists = imageFilesDir.mkdir();
        }

        System.out.println(folderExists);
        if (folderExists) {
            File file = new File(imageFilesDir.getAbsolutePath() + "/" + getImageName(imageFile.getOriginalFilename()));
            Files.write(Path.of(file.getAbsolutePath()), imageFile.getBytes());
            System.out.println(file.getName());
            return file.getName();
        }
        return "";
    }

    private static String getImageName(String originalName) {
        return Instant.now().getEpochSecond() + "_" + originalName;
    }

    public static byte @NotNull [] compressImageBytes(byte[] imageBytes) {
        Deflater deflater = new Deflater();
        deflater.setInput(imageBytes);
        deflater.finish();

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        while (!deflater.finished()) {
            int count = deflater.deflate(buffer);
            baos.write(buffer, 0, count);
        }
        try {
            baos.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        log.info("Compressed image size: {}", baos.toByteArray().length);
        return baos.toByteArray();
    }

    public static byte @NotNull [] decompressImageBytes(byte[] imageBytes) {
        Inflater inflater = new Inflater();
        inflater.setInput(imageBytes);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);
                baos.write(buffer, 0, count);
            }
            baos.close();
        } catch (IOException | DataFormatException e) {
            e.printStackTrace();
        }
        return baos.toByteArray();
    }
}
