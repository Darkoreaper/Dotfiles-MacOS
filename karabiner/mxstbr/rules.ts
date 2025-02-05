import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open } from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Caps Lock -> Hyper Key",
        from: {
          key_code: "caps_lock",
        },
        to: [
          {
            key_code: "left_shift",
            modifiers: ["left_command", "left_control", "left_option"],
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
    ],
  },

  // Define the sublayers of the Hyper key

  ...createHyperSubLayers({
   
    spacebar: {
      h: app("Spotify"),
      // j: app("Alacritty"),
      j: app("kitty"),
      k: app("Safari"),
      l: app("Obsidian"),
      semicolon: app("ChatGPT"),
      quote: app("System Settings"),
      y: app("YouTube"),
      p: app("Brave Browser"),
      open_bracket: app("Reminders"),
      n: app("Visual Studio Code"),
      f: app("Finder"),
      w: app("Microsoft Word"),
      e: app("Microsoft Excel"),
      r: app("Microsoft Remote Desktop"),     
      v: app("zoom.us"),

      // hyper+2 - betterdisplay fav res 1
      // hyper+3 - betterdisplay fav res 2
    },

    // t = "tmux" - video that explains how this works below
    // https://youtu.be/MCbEPylDEWU
    t: {
      // home
      h: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=F431526A-E836-451C-BD36-67AB7DF7CAC2"
      ),
      // dotfiles-latest
      j: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=E2BEB425-38A3-46D8-AAF8-067CA979D4FB"
      ),
      // watusy
      k: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=7B386F00-BDBD-448F-A413-E37952E219A7"
      ),
      // linkarzu.github.io
      l: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=1893BEBE-DC99-41CC-9BE6-74B66E3BBB2C"
      ),
      // scripts
      semicolon: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=9E98F83C-C4C4-4B9B-AFF7-03AAAF2939A5"
      ),
      // containerdata
      p: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=55A10BEE-B776-4D93-B5ED-024A58595D93"
      ),
      // obsidian_main
      u: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=6AACE82D-F9C7-403D-9B27-B758CD1B9E1B"
      ),
      // iCloud scripts
      i: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=03F1E256-FF80-43BA-873C-195628FA5996"
      ),
      // containerdata-public
      o: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=13ED33CA-99DF-4782-BDA6-E01BF3FF0DCC"
      ),
      // Find
      n: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=92398D5C-B95F-4E31-9CB9-1E3E732AF1C0"
      ),
      // daily note
      r: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=9B82DF9D-2DE2-4872-903A-D3C17EE9D555"
      ),
      // open karabiner rules.ts file
      e: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=3DEAE844-CD5B-4695-A58D-AC7CFA935D46"
      ),
      // Go github dir
      open_bracket: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=70963A3C-7982-4BB4-A8E0-5181EC216383"
      ),
    },

    // e = "etmux" - This is to SSH to devices - video that explains how this works below
    // https://youtu.be/MCbEPylDEWU
    e: {
      // xocli3
      h: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=96CE1FAA-A4BF-417B-A84F-E9F3F2001A8D"
      ),
      // docker3
      j: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=665FFAF0-6D73-4AB4-BFC3-B04E898EC780"
      ),
      // storage3
      k: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=540F20B2-E003-4614-B3EE-8E5B4A350AF9"
      ),
      // prodkubecp3
      l: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=DD15014A-15E2-40BF-995D-7B620B96029C"
      ),
      // prodkubew3
      semicolon: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=445A9DDB-7484-45D5-AD9D-9933FAFD5BAC"
      ),
      // dns3
      i: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=8F06BCEE-5333-4D3E-8E8F-7863C5346C75"
      ),
      // lb3
      u: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=37BA1985-1C6B-43E3-BB2C-ADBA3B581929"
      ),
      // Find
      n: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=6C578F42-B350-46B1-A7BE-D1869A081B86"
      ),
      // ~/.ssh/config find
      r: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=B649548D-C750-408D-97E8-74F58B7F504D"
      ),
    },

    // r = "Raycast"
    r: {
      j: open("raycast://extensions/lardissone/raindrop-io/search"),
      k: open("raycast://extensions/google-search/index"),
      l: open("raycast://extensions/KevinBatdorf/obsidian/searchNoteCommand"),
      semicolon: open("raycast://extensions/vishaltelangre/google-drive/index"),
      y: open(
        "raycast://extensions/tonka3000/youtube/search-videos?arguments=%7B%22query%22%3A%22%22%7D"
      ),
      u: open("raycast://extensions/raycast/apple-reminders/create-reminder"),
      i: open("raycast://extensions/raycast/apple-reminders/my-reminders"),
      o: open("raycast://extensions/raycast/github/search-repositories"),
      p: open("raycast://extensions/nhojb/brew/search"),
      h: open("raycast://extensions/mattisssa/spotify-player/search"),
    },

    // s = "System" or "Service"
    s: {
      //j: {
      //   to: [
      //     {
      //      key_code: "volume_decrement",
      //    },
      //  ],
      //},
      //k: {
      //  to: [
      //    {
      //      key_code: "volume_increment",
      //    },
      //  ],
      //},
      // Move to left tab in browsers
      h: {
        to: [
          {
            key_code: "open_bracket",
            modifiers: ["left_command", "left_shift"],
          },
        ],
      },
      // Move to right tab in browsers
      l: {
        to: [
          {
            key_code: "close_bracket",
            modifiers: ["left_command", "left_shift"],
          },
        ],
      },
      u: {
        to: [
          {
            key_code: "display_brightness_decrement",
          },
        ],
      },
      i: {
        to: [
          {
            key_code: "display_brightness_increment",
          },
        ],
      },
      // Previous song
      y: {
        to: [
          {
            key_code: "rewind",
          },
        ],
      },
      // Next song
      o: {
        to: [
          {
            key_code: "fastforward",
          },
        ],
      },
      p: {
        to: [
          {
            key_code: "play_or_pause",
          },
        ],
      },
      // Lock screen
      d: {
        to: [
          {
            key_code: "q",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
      // Close browser tab
      e: {
        to: [
          {
            key_code: "w",
            modifiers: ["left_command"],
          },
        ],
      },
      // BetterTouchTool, connect airpods via bluetooth
      n: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=9A1CFA49-416C-480E-9430-184D2DAEE1CA"
      ),
      // Change audio source to airpods
      m: {
        to: [
          {
            shell_command: `/opt/homebrew/bin/SwitchAudioSource -s "AirPods Pro"; /opt/homebrew/bin/SwitchAudioSource -t input -s "AirPods Pro"`,
          },
        ],
      },
      // Restart yabai
      0: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=5EC0D2D3-869C-4284-B063-B53A17BF7C4C"
      ),
      // Start video recording
      8: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=24E07831-252B-4EB6-B6C4-5E1CDB742BF9"
      ),
      // Stop video recording
      9: open(
        "btt://execute_assigned_actions_for_trigger/?uuid=762AF6E2-41EE-4B74-A2D3-9B96C3D777B5"
      ),
    },

    // shift+arrows to select stuff
    f: {
      h: {
        to: [{ key_code: "left_arrow", modifiers: ["left_shift"] }],
      },
      j: {
        to: [{ key_code: "down_arrow", modifiers: ["left_shift"] }],
      },
      k: {
        to: [{ key_code: "up_arrow", modifiers: ["left_shift"] }],
      },
      l: {
        to: [{ key_code: "right_arrow", modifiers: ["left_shift"] }],
      },
      y: {
        to: [
          { key_code: "left_arrow", modifiers: ["left_shift", "left_option"] },
        ],
      },
      u: {
        to: [
          { key_code: "down_arrow", modifiers: ["left_shift", "left_option"] },
        ],
      },
      i: {
        to: [
          { key_code: "up_arrow", modifiers: ["left_shift", "left_option"] },
        ],
      },
      o: {
        to: [
          { key_code: "right_arrow", modifiers: ["left_shift", "left_option"] },
        ],
      },
    },

    // copy, paste and other stuff
    right_command: {
      // I use this for fzf
      r: {
        to: [{ key_code: "r", modifiers: ["left_control"] }],
      },
      // Slack go to all unreads
      a: {
        to: [{ key_code: "a", modifiers: ["left_command", "left_shift"] }],
      },
      h: {
        to: [{ key_code: "delete_or_backspace" }],
      },
      l: {
        to: [{ key_code: "delete_forward" }],
      },
      // Switch between windows of same app, normally cmd+~
      spacebar: {
        to: [
          { key_code: "grave_accent_and_tilde", modifiers: ["left_command"] },
        ],
      },
    },

    // ALWAYS LEAVE THE ONES WITHOUT ANY SUBLAYERS AT THE BOTTOM
    // Vim nagivation
    h: {
      to: [{ key_code: "left_arrow" }],
    },
    j: {
      to: [{ key_code: "down_arrow" }],
    },
    k: {
      to: [{ key_code: "up_arrow" }],
    },
    l: {
      to: [{ key_code: "right_arrow" }],
    },
    // Map hyper+b to ctrl+b for tmux
    b: {
      to: [{ key_code: "b", modifiers: ["left_control"] }],
    },
  }),
];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        show_in_menu_bar: false,
      },
      profiles: [
        {
          name: "Default",
          complex_modifications: {
            rules,
          },
        },
      ],
    },
    null,
    2
  )
);
