let isLatin = false;
let originalValues = {};

function find_edit() {
    const elements = {
        mvd: document.getElementById('МВД'),
        secondName: document.getElementById("secondName"),
        name: document.getElementById("abc"),
        father: document.getElementById("father_name"),
        sex: document.getElementById("sex"),
        place: document.getElementById("place_HB")
    };

    // Сохраняем оригинальные значения при первом клике
    if (Object.keys(originalValues).length === 0) {
        for (const key in elements) {
            originalValues[key] = elements[key].innerHTML;
        }
    }

    if (!isLatin) {
        // Меняем на латиницу
        elements.mvd.innerHTML = "<b> GU MVD IN THE LONDON DISTRICT </b>";
        elements.secondName.innerHTML = "<b> Belov </b>";
        elements.name.innerHTML = "<b> Nikita </b>";
        elements.father.innerHTML = "<b> Andreevich </b>";
        elements.sex.innerHTML = "<b> MALE </b>";
        elements.place.innerHTML = "<b> Zvezdnyj razrushitel </b>";


        document.getElementById("for_click").textContent = "Изменить язык";
        isLatin = true;
    } else {

        elements.mvd.innerHTML = originalValues.mvd;
        elements.secondName.innerHTML = originalValues.secondName;
        elements.name.innerHTML = originalValues.name;
        elements.father.innerHTML = originalValues.father;
        elements.sex.innerHTML = originalValues.sex;
        elements.place.innerHTML = originalValues.place;

        document.getElementById("for_click").textContent = "Изменить язык";
        isLatin = false;
    }
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click", find_edit)