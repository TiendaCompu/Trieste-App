package online.zytronix.mobile;

import android.Manifest;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.View;
import android.webkit.CookieManager;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ProgressBar;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

public class MainActivity extends Activity {
    private static final int FILE_CHOOSER = 1001;
    private static final int PERMISSIONS = 1002;
    private WebView webView;
    private ProgressBar progressBar;
    private ValueCallback<Uri[]> fileCallback;
    private PermissionRequest pendingPermission;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        webView = findViewById(R.id.webView);
        progressBar = findViewById(R.id.progressBar);
        configureWebView();
        requestPermissionsIfNeeded();
        if (savedInstanceState == null) webView.loadUrl(AppConfig.START_URL);
        else webView.restoreState(savedInstanceState);
    }

    @SuppressLint("SetJavaScriptEnabled")
    private void configureWebView() {
        WebSettings s = webView.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        s.setUserAgentString(s.getUserAgentString() + " ZYTRONIXMobile/1.0.0");
        CookieManager.getInstance().setAcceptCookie(true);
        CookieManager.getInstance().setAcceptThirdPartyCookies(webView, true);
        WebView.setWebContentsDebuggingEnabled(BuildConfig.DEBUG);

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return handleUrl(request.getUrl());
            }
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return handleUrl(Uri.parse(url));
            }
            @Override
            public void onPageStarted(WebView view, String url, android.graphics.Bitmap favicon) {
                progressBar.setVisibility(View.VISIBLE);
            }
            @Override
            public void onPageFinished(WebView view, String url) {
                progressBar.setVisibility(View.GONE);
            }
        });

        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onProgressChanged(WebView view, int progress) {
                progressBar.setProgress(progress);
                progressBar.setVisibility(progress < 100 ? View.VISIBLE : View.GONE);
            }
            @Override
            public boolean onShowFileChooser(WebView webView, ValueCallback<Uri[]> callback, FileChooserParams params) {
                if (fileCallback != null) fileCallback.onReceiveValue(null);
                fileCallback = callback;
                openChooser(params);
                return true;
            }
            @Override
            public void onPermissionRequest(PermissionRequest request) {
                runOnUiThread(() -> handleWebPermission(request));
            }
        });
    }

    private boolean handleUrl(Uri uri) {
        if (uri == null) return false;
        if ("https".equalsIgnoreCase(uri.getScheme()) && AppConfig.ALLOWED_HOST.equalsIgnoreCase(uri.getHost())) return false;
        try { startActivity(new Intent(Intent.ACTION_VIEW, uri)); }
        catch (ActivityNotFoundException e) { Toast.makeText(this, "No se pudo abrir el enlace.", Toast.LENGTH_SHORT).show(); }
        return true;
    }

    private void requestPermissionsIfNeeded() {
        java.util.ArrayList<String> list = new java.util.ArrayList<>();
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) list.add(Manifest.permission.CAMERA);
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED) list.add(Manifest.permission.RECORD_AUDIO);
        if (!list.isEmpty()) ActivityCompat.requestPermissions(this, list.toArray(new String[0]), PERMISSIONS);
    }

    private void handleWebPermission(PermissionRequest request) {
        boolean cameraOk = ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED;
        boolean audioOk = ContextCompat.checkSelfPermission(this, Manifest.permission.RECORD_AUDIO) == PackageManager.PERMISSION_GRANTED;
        if (cameraOk && audioOk) request.grant(request.getResources());
        else {
            pendingPermission = request;
            requestPermissionsIfNeeded();
        }
    }

    private void openChooser(WebChromeClient.FileChooserParams params) {
        Intent files = new Intent(Intent.ACTION_OPEN_DOCUMENT);
        files.addCategory(Intent.CATEGORY_OPENABLE);
        files.setType("image/*");
        files.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true);
        Intent camera = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        Intent chooser = Intent.createChooser(files, "Seleccionar o tomar fotografía");
        if (camera.resolveActivity(getPackageManager()) != null) chooser.putExtra(Intent.EXTRA_INITIAL_INTENTS, new Intent[]{camera});
        try { startActivityForResult(chooser, FILE_CHOOSER); }
        catch (ActivityNotFoundException e) {
            fileCallback.onReceiveValue(null);
            fileCallback = null;
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode != FILE_CHOOSER || fileCallback == null) return;
        Uri[] result = null;
        if (resultCode == RESULT_OK && data != null) {
            if (data.getClipData() != null) {
                int count = data.getClipData().getItemCount();
                result = new Uri[count];
                for (int i = 0; i < count; i++) result[i] = data.getClipData().getItemAt(i).getUri();
            } else if (data.getData() != null) result = new Uri[]{data.getData()};
        }
        fileCallback.onReceiveValue(result);
        fileCallback = null;
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == PERMISSIONS && pendingPermission != null) {
            boolean ok = true;
            for (int r : grantResults) ok &= r == PackageManager.PERMISSION_GRANTED;
            if (ok) pendingPermission.grant(pendingPermission.getResources());
            else pendingPermission.deny();
            pendingPermission = null;
        }
    }

    @Override
    protected void onSaveInstanceState(@NonNull Bundle outState) {
        webView.saveState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) webView.goBack();
        else super.onBackPressed();
    }
}
