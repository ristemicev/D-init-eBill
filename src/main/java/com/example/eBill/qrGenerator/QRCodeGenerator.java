package com.example.eBill.qrGenerator;

import io.nayuki.qrcodegen.*;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.Objects;

public class QRCodeGenerator {

    public static String generateQR(String string, String name) throws IOException {
        QrCode qr0 = QrCode.encodeText(string, QrCode.Ecc.HIGH);
        BufferedImage img = toImage(qr0);
        String path = "uploads/qr-"+ name +".png";
        ImageIO.write(img, "png", new File(path));
        return path;
    }
    private static BufferedImage toImage(QrCode qr) {
        Objects.requireNonNull(qr);
        if (qr.size + 5 * 2L > Integer.MAX_VALUE / 4)
            throw new IllegalArgumentException("Scale or border too large");

        BufferedImage result = new BufferedImage((qr.size + 5 * 2) * 4, (qr.size + 5 * 2) * 4, BufferedImage.TYPE_INT_RGB);
        for (int y = 0; y < result.getHeight(); y++) {
            for (int x = 0; x < result.getWidth(); x++) {
                boolean color = qr.getModule(x / 4 - 5, y / 4 - 5);
                result.setRGB(x, y, color ? 0 : 16777215);
            }
        }
        return result;
    }
}
