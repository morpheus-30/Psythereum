from flask import *
from flask_cors import CORS
from flask import make_response
import base64

from hashlib import sha256,blake2b
import func
import json


headers = {
    'Access-Control-Allow-Origin': '*'
}


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

#tunneling by ngrok to custom domain
from pyngrok import ngrok
ngrok.set_auth_token("2c7VjHlZYltSU2nvHSUrBn797S2_79QgSn4eStjEv1yjfvpMt")
# alternate of ngrok http --domain=fancy-adequately-fish.ngrok-free.app 5000 command

# http_tunnel = ngrok.connect(proto="http", domain="fancy-adequately-fish.ngrok-free.app", addr="5000")



# print(http_tunnel.public_url)

@app.route('/', methods=['GET','POST'])
def home():
    return "Welcome to backennd"

@app.route('/api/encryptFile', methods=['POST'])
def encryptFile():
    body = request.get_json()
    print(body)
    #take the file from the request
    file = request.files['file']
    filename = file.filename
    
    file.save(filename)
    
  
    #encrypt the file
    outPath = func.encrypt(filename)

    #return the encrypted file as file
    file1 = open(outPath, 'rb').read()
    file1 = base64.b64encode(file1)

    response = make_response()
    response.headers['status'] = True
    response.data = json.dumps({
      "default": file1.decode(),
    })
    return send_file(outPath, mimetype='audio/ogg')

@app.route('/api/decryptFile', methods=['POST'])
def decryptFile():
    #take the file from the request
    file = request.files['file']
    filename = file.filename

    if filename == '':
        filename = 'temp.ogg'
    file.save(filename)

    #decrypt the file
    outPath = func.decrypt(filename)

    #return the decrypted file as file
    file1 = open(outPath, 'rb').read()
    file1 = base64.b64encode(file1)

    response = make_response()
    response.headers['status'] = True
    response.data = json.dumps({
      "default": file1.decode(),
    })
    # return response
    return send_file(outPath, mimetype='audio/ogg')



app.run(port=5005,debug=True)


