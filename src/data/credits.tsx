import { jsx } from "features/feature"
import { layers } from "game/layers"
import { render } from "util/vue"
import { unref } from "vue"

type Credits = { name: string, creator: string, help?: string, other?: string[], symbol?: string, fs?: string }

import { main } from "./projEntry"

const dayCredits: Credits[] = [
    {
        name: "Trees",
        creator: "thepaperpilot",
        help: "Jacorb, Escapee",
    },
    {
        name: "The Workshop",
        creator: "thepaperpilot",
        help: "Jacorb, emanresu",
    },
    {
        name: "Coal",
        creator: "Escapee",
        help: "Jacorb, thepaperpilot",
    },
    {
        name: "Elf Training",
        creator: "thepaperpilot",
        help: "incremental_gamer, emanresu",
    },
    {
        name: "Paper",
        creator: "thepaperpilot",
    },
    {
        name: "Boxes",
        creator: "thepaperpilot",
    },
    {
        name: "Metal",
        creator: "Escapee",
    },
    {
        name: "Cloth",
        creator: "thepaperpilot",
    },
    {
        name: "Oil",
        creator: "ducdat0507",
    },
    {
        name: "Plastic",
        creator: "thepaperpilot",
    },
    {
        name: "Dyes",
        creator: "Jacorb",
    },
    {
        name: "Management",
        creator: "incremental_gamer, downvoid, thepaperpilot",
    },
    {
        name: "Management II",
        creator: "incremental_gamer, downvoid, thepaperpilot",
    },
    {
        name: "Letters",
        creator: "thepaperpilot",
    },
    {
        name: "Wrapping Paper",
        creator: "emanresu, thepaperpilot, Escapee",
        fs: '28px'
    },
    {
        name: "Ribbons",
        creator: "thepaperpilot, Escapee",
    },
    {
        name: "Toys",
        creator: "downvoid",
    },
    {
        name: "Factory",
        creator: "incremental_gamer",
        help: "thepaperpilot, ducdat, downvoid, emanresu, yhvr",
        other: [
            "Art by emanresu"
        ],
    },
    {
        name: "Factory II",
        creator: "downvoid",
        help: "thepaperpilot",
        other: [
            "Art by emanresu"
        ],
    },
    {
        name: "Presents",
        creator: "incremental_gamer",
        other: [
            "Art by emanresu"
        ],
    },
    {
        name: "Reindeer",
        creator: "thepaperpilot"
    },
    {
        name: "Sleigh Repair",
        creator: "downvoid"
    },
    {
        name: "Routing",
        creator: "thepaperpilot"
    },
    {
        name: "Present Packing",
        creator: "Escapee",
        fs: '26px'
    }
]

const display = jsx(() => (
    <div style="text-align: center; line-spacing: 5px">
        <h1>Advent Incremental</h1>
        <br />
        <h2>Created by thepaperpilot and friends</h2>
        <br /><br /><br /><br /><br />
        {
            dayCredits.map(({name, help, other, creator, fs}, day) => (
                render(jsx(() => <div style="position: relative">
                    <span style="width: calc(100% - 260px); display: inline-block;">
                        <h1 style={{ color: unref(layers[main.days[day].layer ?? ""]?.color ?? "white"), fontSize: fs || '30px'}}>Day {day+1} - {name}</h1>
                        <br /><br />
                        Created by {creator} <br />
                        {help ? <>With help from {help}</> : undefined}<br />
                        {other ? other?.map((other) => <>{other}<br /></>) : undefined}
                        <br /><br />
                    </span>
                    <img style={`position: absolute; top: 5px; ${day % 2 ? 'left' : 'right'}: 20px; width: 100px;`} src={main.days[day].symbol}/>
                </div>))
            ))
        }
        <p>Credits created by emanresu</p>
        <br /> <br /> <br /> <br /> <br />
        <h1>Special Thanks</h1>
        <p>Nekosity</p>
        <p>Yhvr</p> 
        <p>Ducdat0507</p>
        <p>Haley</p>
        <br />
        <p>And last but not least, a massive thanks to everyone who played and provided feedback on the game.</p>
        <h1>Thanks for playing!</h1>
    </div>
))

export { display as credits }