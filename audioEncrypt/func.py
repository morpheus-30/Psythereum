from cryptography.fernet import Fernet

def encrypt(filename):
    key =""
    with open('filekey.key', 'rb') as filekey:
        key = filekey.read()
    
    # using the generated key
    fernet = Fernet(key)
    
    # opening the original file to encrypt
    with open(filename, 'rb') as file:
        original = file.read()
        
    # encrypting the file
    encrypted = fernet.encrypt(original)
    
    # opening the file in write mode and 
    # writing the encrypted data
    with open("enc-"+filename, 'wb') as encrypted_file:
        encrypted_file.write(encrypted)

    return "enc-"+filename

def decrypt(filename):
    key =""
    with open('filekey.key', 'rb') as filekey:
        key = filekey.read()
    
    # using the key
    fernet = Fernet(key)
    
    # # opening the encrypted file
    # with open(filename, 'rb') as enc_file:
    #     encrypted = enc_file.read()
    
    # decrypting the file
    decrypted = fernet.decrypt(filename)
    
    # opening the file in write mode and 
    # writing the decrypted data
    with open("dec-"+filename, 'wb') as decrypted_file:
        decrypted_file.write(decrypted)

    return "dec-"+filename