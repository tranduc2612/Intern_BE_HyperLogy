package com.example.test01;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class EditContactView extends AppCompatActivity {
    EditText edtID, edtName, edtNumber;
    Button buttonEdit, buttonBack;
    LeXuanQuynh_SQLite db = new LeXuanQuynh_SQLite(this);
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_edit_contact_view);
        InitWidget();
        buttonBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        Contact_Quynh contact = (Contact_Quynh) getIntent().getSerializableExtra("contact");
        edtID.setText(String.valueOf(contact.getId()));
        edtName.setText(contact.getTen());
        edtNumber.setText(contact.getSdt());

        buttonEdit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int id = Integer.parseInt(edtID.getText().toString());
                String name = edtName.getText().toString();
                String number = edtNumber.getText().toString();
                Contact_Quynh editContact = new Contact_Quynh(id, name, number);
                db.updateContact(contact.getId(), editContact);
                // chuyen man hinh
                Intent intent = new Intent(EditContactView.this, MainActivity.class);
                startActivity(intent);
            }
        });
    }
    private void InitWidget() {
        edtID = findViewById(R.id.edtIDEdit);
        edtName = findViewById(R.id.edtNameEdit);
        edtNumber = findViewById(R.id.edtNumberEdit);
        buttonBack = findViewById(R.id.buttonBackEdit);
        buttonEdit = findViewById(R.id.buttonEdit);
    }
}