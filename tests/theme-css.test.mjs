import {readFileSync} from "node:fs";
import {test} from "node:test";
import assert from "node:assert/strict";

const css = readFileSync(new URL("../theme.css", import.meta.url), "utf8");

const ruleBody = (selector) => {
    const pattern = new RegExp(`${selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\{([^}]*)\\}`, "m");
    const match = css.match(pattern);
    assert.ok(match, `Expected rule for ${selector}`);
    return match[1];
};

test("unordered-list block markers keep SiYuan's native action hitbox", () => {
    const listMarkerRule = ruleBody(".protyle-wysiwyg [data-subtype=\"u\"] > .protyle-action svg");

    assert.doesNotMatch(listMarkerRule, /width:\s*6px\s*!important/);
    assert.doesNotMatch(listMarkerRule, /height:\s*6px\s*!important/);
    assert.doesNotMatch(listMarkerRule, /color:\s*transparent/);
    assert.doesNotMatch(listMarkerRule, /background-color:/);
});
