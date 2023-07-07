from django.core.exceptions import ValidationError
def validate_username(value):
    Banned_Word = ['XDD',"TMD","NL","fuck"]
    for bword in Banned_Word:
        if bword in value:
            raise ValidationError('User Name Must Not include banned words')