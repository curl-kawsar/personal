(function() {
  var $animate, $container, $message, $paragraph, MESSAGES, animate, initialise, scramble;

  MESSAGES = [];

  MESSAGES.push({
    delay: 0,
    text: "hey tau gak nis!"
  });

  MESSAGES.push({
    delay: 1200,
    text: "aku teh"
  });

  MESSAGES.push({
    delay: 2200,
    text: "nyaah"
  });

  MESSAGES.push({
    delay: 3600,
    text: "ka kamu"
  });

  MESSAGES.push({
    delay: 5200,
    text: "udah sakitu 💖"
  });

  $container = $("#container");

  $message = $("#message");

  $animate = $("#animate");

  $paragraph = null;

  scramble = function(element, text, options) {
    var $element, addGlitch, character, defaults, ghostCharacter, ghostCharacters, ghostLength, ghostText, ghosts, glitchCharacter, glitchCharacters, glitchIndex, glitchLength, glitchProbability, glitchText, glitches, i, j, letter, object, order, output, parameters, ref, settings, shuffle, target, textCharacters, textLength, wrap;
    // Default properties.
    defaults = {
      probability: 0.2,
      glitches: '-|/\\',
      blank: '',
      duration: text.length * 40,
      ease: 'easeInOutQuad',
      delay: 0.0
    };
    // Convert the element to a jQuery object and build the settings object.
    $element = $(element);
    settings = $.extend(defaults, options);
    // Convenience methods.
    shuffle = function() {
      if (Math.random() < 0.5) {
        return 1;
      } else {
        return -1;
      }
    };
    wrap = function(text, classes) {
      return `<span class="${classes}">${text}</span>`;
    };
    // Glitch values.
    glitchText = settings.glitches;
    glitchCharacters = glitchText.split('');
    glitchLength = glitchCharacters.length;
    glitchProbability = settings.probability;
    glitches = (function() {
      var j, len, results;
      results = [];
      for (j = 0, len = glitchCharacters.length; j < len; j++) {
        letter = glitchCharacters[j];
        results.push(wrap(letter, 'glitch'));
      }
      return results;
    })();
    // Ghost values.
    ghostText = $element.text();
    ghostCharacters = ghostText.split('');
    ghostLength = ghostCharacters.length;
    ghosts = (function() {
      var j, len, results;
      results = [];
      for (j = 0, len = ghostCharacters.length; j < len; j++) {
        letter = ghostCharacters[j];
        results.push(wrap(letter, 'ghost'));
      }
      return results;
    })();
    // Text values.
    textCharacters = text.split('');
    textLength = textCharacters.length;
    // Order and output arrays.
    order = (function() {
      var results = [];
      for (var j = 0; 0 <= textLength ? j < textLength : j > textLength; 0 <= textLength ? j++ : j--){ results.push(j); }
      return results;
    }).apply(this).sort(this.shuffle);
    output = [];
// Build the output array.
    for (i = j = 0, ref = textLength; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
      glitchIndex = Math.floor(Math.random() * (glitchLength - 1));
      glitchCharacter = glitches[glitchIndex];
      ghostCharacter = ghosts[i] || settings.blank;
      addGlitch = Math.random() < glitchProbability;
      character = addGlitch ? glitchCharacter : ghostCharacter;
      output.push(character);
    }
    // Animate the text.
    object = {
      value: 0
    };
    target = {
      value: 1
    };
    parameters = {
      duration: settings.duration,
      ease: settings.ease,
      step: function() {
        var index, k, progress, ref1;
        progress = Math.floor(object.value * (textLength - 1));
        for (i = k = 0, ref1 = progress; (0 <= ref1 ? k <= ref1 : k >= ref1); i = 0 <= ref1 ? ++k : --k) {
          index = order[i];
          output[index] = textCharacters[index];
        }
        return $element.html(output.join(''));
      },
      complete: function() {
        return $element.html(text);
      }
    };
    // Animate the text.
    return $(object).delay(settings.delay).animate(target, parameters);
  };

  animate = function() {
    var data, element, index, j, len, options;
    for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
      data = MESSAGES[index];
      element = $paragraph.get(index);
      element.innerText = '';
      options = {
        delay: data.delay
      };
      scramble(element, data.text, options);
    }
  };

  initialise = function() {
    var index, j, len, text;
    $animate.click(animate);
    for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
      text = MESSAGES[index];
      $message.append("<p>");
    }
    $paragraph = $container.find("p");
    animate();
  };

  initialise();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLFFBQUEsRUFBQSxVQUFBLEVBQUEsUUFBQSxFQUFBLFVBQUEsRUFBQSxRQUFBLEVBQUEsT0FBQSxFQUFBLFVBQUEsRUFBQTs7RUFBQSxRQUFBLEdBQVc7O0VBQ1gsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxDQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBRUEsVUFBQSxHQUFhLENBQUEsQ0FBRSxZQUFGOztFQUNiLFFBQUEsR0FBVyxDQUFBLENBQUUsVUFBRjs7RUFDWCxRQUFBLEdBQVcsQ0FBQSxDQUFFLFVBQUY7O0VBQ1gsVUFBQSxHQUFhOztFQUViLFFBQUEsR0FBVyxRQUFBLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsT0FBaEIsQ0FBQTtBQUVYLFFBQUEsUUFBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsUUFBQSxFQUFBLGNBQUEsRUFBQSxlQUFBLEVBQUEsV0FBQSxFQUFBLFNBQUEsRUFBQSxNQUFBLEVBQUEsZUFBQSxFQUFBLGdCQUFBLEVBQUEsV0FBQSxFQUFBLFlBQUEsRUFBQSxpQkFBQSxFQUFBLFVBQUEsRUFBQSxRQUFBLEVBQUEsQ0FBQSxFQUFBLENB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XG5NRVNTQUdFUy5wdXNoIGRlbGF5OjAsICAgIHRleHQ6XCJoZXkgdGF1IGdhayBuaXMhXCJcbk1FU1NBR0VTLnB1c2ggZGVsYXk6MTIwMCwgdGV4dDpcImFrdSB0ZWhcIlxuTUVTU0FHRVMucHVzaCBkZWxheToyMjAwLCB0ZXh0OlwibnlhYWhcIlxuTUVTU0FHRVMucHVzaCBkZWxheTozNjAwLCB0ZXh0Olwia2Ega2FtdVwiXG5NRVNTQUdFUy5wdXNoIGRlbGF5OjUyMDAsIHRleHQ6XCJ1ZGFoIHNha2l0dSDwn5KWXCJcblxuJGNvbnRhaW5lciA9ICQoXCIjY29udGFpbmVyXCIpXG4kbWVzc2FnZSA9ICQoXCIjbWVzc2FnZVwiKVxuJGFuaW1hdGUgPSAkKFwiI2FuaW1hdGVcIilcbiRwYXJhZ3JhcGggPSBudWxsXG5cbnNjcmFtYmxlID0gKGVsZW1lbnQsIHRleHQsIG9wdGlvbnMpIC0+XG5cbiAgIyBEZWZhdWx0IHByb3BlcnRpZXMuXG4gIGRlZmF1bHRzID1cbiAgICBwcm9iYWJpbGl0eTogMC4yXG4gICAgZ2xpdGNoZXM6ICctfC9cXFxcJ1xuICAgIGJsYW5rOiAnJ1xuICAgIGR1cmF0aW9uOiB0ZXh0Lmxlbmd0aCAqIDQwXG4gICAgZWFzZTogJ2Vhc2VJbk91dFF1YWQnXG4gICAgZGVsYXk6IDAuMFxuXG4gICMgQ29udmVydCB0aGUgZWxlbWVudCB0byBhIGpRdWVyeSBvYmplY3QgYW5kIGJ1aWxkIHRoZSBzZXR0aW5ncyBvYmplY3QuXG4gICRlbGVtZW50ID0gJChlbGVtZW50KVxuICBzZXR0aW5ncyA9ICQuZXh0ZW5kIGRlZmF1bHRzLCBvcHRpb25zXG5cbiAgIyBDb252ZW5pZW5jZSBtZXRob2RzLlxuICBzaHVmZmxlID0gKCkgLT4gaWYgTWF0aC5yYW5kb20oKSA8IDAuNSB0aGVuIDEgZWxzZSAtMVxuICB3cmFwID0gKHRleHQsIGNsYXNzZXMpIC0+IFwiXCJcIjxzcGFuIGNsYXNzPVwiI3tjbGFzc2VzfVwiPiN7dGV4dH08L3NwYW4+XCJcIlwiXG5cbiAgIyBHbGl0Y2ggdmFsdWVzLlxuICBnbGl0Y2hUZXh0ID0gc2V0dGluZ3MuZ2xpdGNoZXNcbiAgZ2xpdGNoQ2hhcmFjdGVycyA9IGdsaXRjaFRleHQuc3BsaXQgJydcbiAgZ2xpdGNoTGVuZ3RoID0gZ2xpdGNoQ2hhcmFjdGVycy5sZW5ndGhcbiAgZ2xpdGNoUHJvYmFiaWxpdHkgPSBzZXR0aW5ncy5wcm9iYWJpbGl0eVxuICBnbGl0Y2hlcyA9ICgod3JhcCBsZXR0ZXIsICdnbGl0Y2gnKSBmb3IgbGV0dGVyIGluIGdsaXRjaENoYXJhY3RlcnMpXG5cbiAgIyBHaG9zdCB2YWx1ZXMuXG4gIGdob3N0VGV4dCA9ICRlbGVtZW50LnRleHQoKVxuICBnaG9zdENoYXJhY3RlcnMgPSBnaG9zdFRleHQuc3BsaXQgJydcbiAgZ2hvc3RMZW5ndGggPSBnaG9zdENoYXJhY3RlcnMubGVuZ3RoXG4gIGdob3N0cyA9ICgod3JhcCBsZXR0ZXIsICdnaG9zdCcpIGZvciBsZXR0ZXIgaW4gZ2hvc3RDaGFyYWN0ZXJzKVxuXG4gICMgVGV4dCB2YWx1ZXMuXG4gIHRleHRDaGFyYWN0ZXJzID0gdGV4dC5zcGxpdCAnJ1xuICB0ZXh0TGVuZ3RoID0gdGV4dENoYXJhY3RlcnMubGVuZ3RoXG5cbiAgIyBPcmRlciBhbmQgb3V0cHV0IGFycmF5cy5cbiAgb3JkZXIgPSBbMC4uLnRleHRMZW5ndGhdLnNvcnQgQHNodWZmbGVcbiAgb3V0cHV0ID0gW11cblxuICAjIEJ1aWxkIHRoZSBvdXRwdXQgYXJyYXkuXG4gIGZvciBpIGluIFswLi4udGV4dExlbmd0aF1cbiAgICBnbGl0Y2hJbmRleCA9IE1hdGguZmxvb3IgTWF0aC5yYW5kb20oKSAqIChnbGl0Y2hMZW5ndGggLSAxKVxuICAgIGdsaXRjaENoYXJhY3RlciA9IGdsaXRjaGVzW2dsaXRjaEluZGV4XVxuICAgIGdob3N0Q2hhcmFjdGVyID0gZ2hvc3RzW2ldIG9yIHNldHRpbmdzLmJsYW5rXG4gICAgYWRkR2xpdGNoID0gTWF0aC5yYW5kb20oKSA8IGdsaXRjaFByb2JhYmlsaXR5XG4gICAgY2hhcmFjdGVyID0gaWYgYWRkR2xpdGNoIHRoZW4gZ2xpdGNoQ2hhcmFjdGVyIGVsc2UgZ2hvc3RDaGFyYWN0ZXJcbiAgICBvdXRwdXQucHVzaCBjaGFyYWN0ZXJcblxuICAjIEFuaW1hdGUgdGhlIHRleHQuXG4gIG9iamVjdCA9IHZhbHVlOjBcbiAgdGFyZ2V0ID0gdmFsdWU6MVxuICBwYXJhbWV0ZXJzID1cbiAgICBkdXJhdGlvbjpzZXR0aW5ncy5kdXJhdGlvblxuICAgIGVhc2U6c2V0dGluZ3MuZWFzZVxuICAgIHN0ZXA6IC0+XG4gICAgICBwcm9ncmVzcyA9IE1hdGguZmxvb3Igb2JqZWN0LnZhbHVlICogKHRleHRMZW5ndGggLSAxKVxuICAgICAgZm9yIGkgaW4gWzAuLnByb2dyZXNzXVxuICAgICAgICBpbmRleCA9IG9yZGVyW2ldXG4gICAgICAgIG91dHB1dFtpbmRleF0gPSB0ZXh0Q2hhcmFjdGVyc1tpbmRleF1cbiAgICAgICRlbGVtZW50Lmh0bWwgb3V0cHV0LmpvaW4gJydcbiAgICBjb21wbGV0ZTogLT5cbiAgICAgICRlbGVtZW50Lmh0bWwgdGV4dFxuXG4gICMgQW5pbWF0ZSB0aGUgdGV4dC5cbiAgJChvYmplY3QpLmRlbGF5KHNldHRpbmdzLmRlbGF5KS5hbmltYXRlIHRhcmdldCwgcGFyYW1ldGVyc1xuXG5cblxuYW5pbWF0ZSA9ICgpIC0+XG4gIGZvciBkYXRhLCBpbmRleCBpbiBNRVNTQUdFU1xuICAgIGVsZW1lbnQgPSAkcGFyYWdyYXBoLmdldCBpbmRleFxuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gJydcbiAgICBvcHRpb25zID0gZGVsYXk6IGRhdGEuZGVsYXlcbiAgICBzY3JhbWJsZSBlbGVtZW50LCBkYXRhLnRleHQsIG9wdGlvbnNcbiAgcmV0dXJuXG5cbmluaXRpYWxpc2UgPSAoKSAtPlxuICAkYW5pbWF0ZS5jbGljayBhbmltYXRlXG4gICRtZXNzYWdlLmFwcGVuZCBcIjxwPlwiIGZvciB0ZXh0LCBpbmRleCBpbiBNRVNTQUdFU1xuICAkcGFyYWdyYXBoID0gJGNvbnRhaW5lci5maW5kIFwicFwiXG4gIGFuaW1hdGUoKVxuICByZXR1cm5cblxuaW5pdGlhbGlzZSgpXG4iXX0=
//# sourceURL=coffeescript