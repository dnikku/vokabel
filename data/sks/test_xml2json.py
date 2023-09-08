import json
from os.path import normpath, join, abspath
import xml.etree.ElementTree as ET


def test_o():
    p = normpath(join(abspath(__file__), "../sksfragen.xml"))
    tree = ET.parse(p)

    dd = to_dict(tree.getroot(), 0)

    with open(p + "_.json", "w", encoding="utf-8") as stream:
        json.dump(dd, stream)

    assert True

def to_dict(node, nr) -> dict:
    if node.tag == "questionaire":
        return {
            "topics": [to_dict(it, 0) for it in node]
        }
    elif node.tag == "topic":
        return {
            "id": int(node.attrib.get("id", 0)),
            "name": node.attrib.get("name"),
            "questions": [to_dict(it, index) for index, it in enumerate(node, start=1)]
        }
    elif node.tag == "question":
        return {
            #"id": int(node.attrib.get("id", 0)),
            "nr": nr,
            "text_de": [it.text for it in node if it.tag == "text"][0],
            "answer_de": [it.text for it in node if it.tag == "answer"][0],
        }
