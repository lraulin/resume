import json
import pprint
import sys
import xml.etree.ElementTree as et
from datetime import date, datetime

import yaml
import dicttoxml


class DateTimeEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, datetime) or isinstance(o, date):
            return o.isoformat()

        return json.JSONEncoder.default(self, o)


def main():
    file = sys.argv[1]
    resume = import_file(file)
    save_as_json("resume", resume)
    save_as_xml("resume", resume)


def import_file(file):
    with open(file, "r") as f:
        data = yaml.load(f, Loader=yaml.Loader)
        return data


def save_as_json(file_base_name, obj):
    file_name = file_base_name + ".json"
    with open(file_name, "w") as f:
        f.write(json.dumps(obj, cls=DateTimeEncoder))


def save_as_xml(file_base_name, obj):
    file_name = file_base_name + ".xml"
    xml = dicttoxml.dicttoxml(obj)
    with open(file_name, "wb") as f:
        f.write(xml)


if __name__ == "__main__":
    main()
